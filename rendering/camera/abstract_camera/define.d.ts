import { Vec3 } from '../../../common/data/core';
export interface ILootAt {
    eye: Vec3;
    up: Vec3;
    target: Vec3;
}
export interface IFrustum {
    left: number;
    right: number;
    top: number;
    bottom: number;
    near: number;
    far: number;
}
