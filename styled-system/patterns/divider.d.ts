/* eslint-disable */
import type { SystemStyleObject, ConditionalValue } from '../types'
import type { Properties } from '../types/csstype'
import type { PropertyValue } from '../types/prop-type'
import type { DistributiveOmit } from '../types/system-types'
import type { Tokens } from '../tokens'

export type DividerProperties = {
   orientation?: ConditionalValue<"horizontal" | "vertical">
	thickness?: ConditionalValue<Tokens["sizes"] | Properties["borderWidth"]>
	color?: ConditionalValue<Tokens["colors"] | Properties["borderColor"]>
}


type DividerStyles = DividerProperties & DistributiveOmit<SystemStyleObject, keyof DividerProperties >

interface DividerPatternFn {
  (styles?: DividerStyles): string
  raw: (styles: DividerStyles) => DividerStyles
}


export declare const divider: DividerPatternFn;