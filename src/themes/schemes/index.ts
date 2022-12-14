import { SchemeBuilder } from '../types'
import aura from './aura'
import klein from './klein'
import solarized from './solarized'
import balmy from './balmy'

/**
 * Color schemes of theme
 * all available in ligth and dark mode
 * 配色方案
 */
const schemes: Record<string, SchemeBuilder> = {
  aura,
  solarized,
  klein,
  balmy,
}

export default schemes