export const ARABIC_REGEX = /^[\u0621-\u064A\s]+$/;
export const ENGLISH_REGEX = /^[a-zA-Z\s]+$/;
export const ENGLISH_REGEX_WITH_SPECIAL_CHAR = /^[a-zA-Z\s\-#@!$%^&*()_+={}[\]:;"'<>,.?/\\|~`]+$/;
export const PREVENT_ONLY_WHITE_SPACE_REGEX = /^\S.*$/;
export const SAUDI_PHONE_NUMBER_REGEX = /^5\d{8}$/;
export const SAUDI_PHONE_NUMBER_REGEX2 = /^05\d{8}$/;
export const SAUDI_NATIONAL_ID_REGEX = /^[12]\d{9}$/;
export const SAUDI_NATIONAL_ID_CITIZEN = /^[1]\d{9}$/;
export const EMAIL_FORMAT_REGEX = /^[^@]+@[^@]+\.[^@]+$/;
export const WEBSITE_FORMAT_REGEX = /https:www\.[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;
export const WEBSITE_FORMAT_REGEX2 =
  /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,63}(\/[\w-]*)*(\?.*)?(#.*)?$/;
export const SAUDI_MOBILE_NUMBER_REGEX = /^\+966-5\d{8}$/;
export const SAUDI_IBAN_NUMBER_REGEX =
  /SA[a-zA-Z0-9]{2}\s?([0-9]{2})([a-zA-Z0-9]{2}\s?)([a-zA-Z0-9]{4}\s?){4}\s?/;
