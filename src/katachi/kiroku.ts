import { string } from "astro:schema"
import { DateTime } from "luxon"

export const futatsu = futakae()

type futaype = {
  frontmatter: {
    title: string, date: string, id: string
  }
}

function futakae() {
  const tsu: futaype[] = Object.values(import.meta.glob('../kiroku/*.mdx', { eager: true }))
  console.log(zikan(tsu))
  return tsu
}

function zikan(zikan: futaype[]) {
  const len = zikan.length
  let count = 0
  let list: number[] = []
  while (len > count) {
    list.push(tomi(zikan[count].frontmatter.date))
    count += 1
  }
  const sorted = list.sort((a, b) => b - a)
  const modosu = sorted.map(a => {
    return tofo(a)
  })
//  const narabi = sorted.map(i => .indexOf(i))
  return modosu
}

function tomi(time: string) {
    const d = DateTime.fromFormat(time, "yyyy-MM-dd HH:mm")
    return d.toMillis()
}

function tofo(time: number) {
  const d = DateTime.fromMillis(time)
  return d.toFormat("yyyy-MM-dd HH:mm")
}


// 並び替え後の listA に対して、元の index を探す
// const order = listA.map(v => originalA.indexOf(v)); // [2, 1, 0]

// listB をその順番に並び替え
// const sortedB = order.map(i => listB[i]);

// console.log(sortedB); // ['c', 'b', 'a']