import createJITI from 'jiti';
const jiti = createJITI(new URL(import.meta.url).pathname);

jiti('./src/env');

/** @type {import('next').NextConfig} */
export default {};
