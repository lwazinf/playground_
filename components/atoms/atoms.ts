import { atom } from "recoil";

export const wallet_ = atom({
    key: 'default',
    default: false
})

export const node_ = atom({
    key: 'default',
    default: 'node_'
})