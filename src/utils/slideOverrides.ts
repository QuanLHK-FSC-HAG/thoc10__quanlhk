import { Slide } from '../types';
import { TOPIC1_SLIDES_EN } from './slideTranslations_topic1';
import { TOPIC2_SLIDES_EN } from './slideTranslations_topic2';
import { TOPIC3_SLIDES_EN } from './slideTranslations_topic3';
import { TOPIC4_SLIDES_EN } from './slideTranslations_topic4';
import { TOPIC5_A_SLIDES_EN } from './slideTranslations_topic5_a';
import { TOPIC5_B_SLIDES_EN } from './slideTranslations_topic5_b';
import { TOPIC5_C_SLIDES_EN } from './slideTranslations_topic5_c';
import { TOPIC6_7_8_SLIDES_EN } from './slideTranslations_topic6_7_8';

export const ALL_SLIDE_OVERRIDES_EN: Record<string, Slide> = {
  ...TOPIC1_SLIDES_EN,
  ...TOPIC2_SLIDES_EN,
  ...TOPIC3_SLIDES_EN,
  ...TOPIC4_SLIDES_EN,
  ...TOPIC5_A_SLIDES_EN,
  ...TOPIC5_B_SLIDES_EN,
  ...TOPIC5_C_SLIDES_EN,
  ...TOPIC6_7_8_SLIDES_EN,
};

