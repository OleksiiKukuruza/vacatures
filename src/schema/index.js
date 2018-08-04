import { schema } from 'normalizr';

export const vacancySchema = new schema.Entity('vacancies');
export const vacancyListSchema = [vacancySchema];
