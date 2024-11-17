/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import { Dispatch, MutableRefObject, SetStateAction, Suspense } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";
import Lights from "./Lights";
import IPhone from "./Iphone";
import Loader from "./Loader";

export type Model = {
    id?: number;
    title: string;
    color: string[];
    img: string;
};
export type ModelViewProps = {
    index: number;
    groupRef: MutableRefObject<THREE.Group<THREE.Object3DEventMap>>;
    gsapType: string;
    controlRef: MutableRefObject<any>;
    setRotationState: Dispatch<SetStateAction<number>>;
    item: Model;
    size: string;
};

export default function ModelView({
    index,
    groupRef,
    gsapType,
    controlRef,
    setRotationState,
    item,
    size,
}: ModelViewProps) {
    return (
        <View
            index={index}
            id={gsapType}
            className={cn({
                " w-full h-full absolute": true,
                "right-[-100%]": index === 2,
            })}
        >
            <ambientLight intensity={0.3} />
            <PerspectiveCamera makeDefault position={[0, 0, 4]} />

            <Lights />

            <OrbitControls
                makeDefault
                ref={controlRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.4}
                target={new THREE.Vector3(0, 0, 0)}
                onEnd={() =>
                    setRotationState(controlRef.current.getAzimuthalAngle())
                }
            />

            <group
                ref={groupRef}
                name={`${index === 1 ? "small" : "large"}`}
                position={[0, 0, 0]}
            >
                <Suspense fallback={<Loader />}>
                    <IPhone
                        scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
                        item={item}
                        size={size}
                    />
                </Suspense>
            </group>
        </View>
    );
}
