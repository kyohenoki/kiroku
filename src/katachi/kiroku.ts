import { DateTime } from "luxon"

export const futatsu = futakae('f')

type futaype = {
  frontmatter: {
    title: string, date: string, id: string
  }
}

export const narabi = futakae('n')

function futakae(mode: string) {
  const tsu: futaype[] = Object.values(import.meta.glob('../kiroku/*.mdx', { eager: true }))
  const zika = zikan(tsu)
  const henka = henkan(zika)
  const zenbu = awaseru(zika, henka)
  if (mode === 'n') {
    return zenbu
  } else {
    return tsu
  }
}

function zikan(zikan: futaype[]) {
  const len = zikan.length
  let count = 0
  let list: number[] = []
  while (len > count) {
    list.push(tomi(zikan[count].frontmatter.date))
    count += 1
  }
  return list
}

function tomi(time: string) {
    const d = DateTime.fromFormat(time, "yyyy/MM/dd HH:mm")
    return d.toMillis()
}

function tofo(time: number) {
  const d = DateTime.fromMillis(time)
  return d.toFormat("yyyy/MM/dd HH:mm")
}

function henkan(zk: number[]) {
  const list = [...zk].sort((a, b) => b - a)
  const modosu = list.map(a => {
    return tofo(a)
  })
  return list 
}

function awaseru(zk: number[], hn: number[]) {
  const ban = hn.map(i => zk.indexOf(i))
  return ban
}
