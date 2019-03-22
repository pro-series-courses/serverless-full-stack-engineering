import { ENVIRONMENT } from 'lib/environment';

/* LOGIN TYPES */
export const AUTHENTICATION_SIGN_IN = "AUTHENTICATION_SIGN_IN";
export const AUTHENTICATION_SIGN_OUT = "AUTHENTICATION_SIGN_OUT";
export const AUTHENTICATION_SIGN_UP = "AUTHENTICATION_SIGN_UP";
export const AUTHENTICATION_CONFIRM_REGISTRATION = "AUTHENTICATION_CONFIRM_REGISTRATION";
export const AUTHENTICATION_RESEND_CODE = "AUTHENTICATION_RESEND_CODE";
export const AUTHENTICATION_FORGOT_PASSWORD = "AUTHENTICATION_FORGOT_PASSWORD";
export const AUTHENTICATION_CONFIRM_PASSWORD = "AUTHENTICATION_CONFIRM_PASSWORD";
export const AUTHENTICATION_CHANGE_PASSWORD = "AUTHENTICATION_CHANGE_PASSWORD";
export const AUTHENTICATION_SET_USERNAME = "AUTHENTICATION_SET_USERNAME";
/* NAVIGATION TYPES */
export const NAVIGATION_HOME = "NAVIGATION_HOME";
export const NAVIGATION_LANDING = "NAVIGATION_LANDING";
export const NAVIGATION_AUTHENTICATION_SWITCH_FORM = "NAVIGATION_AUTHENTICATION_SWITCH_FORM";
export const NAVIGATION_AUTHENTICATION_SIGN_IN = "NAVIGATION_AUTHENTICATION_SIGN_IN";
export const NAVIGATION_AUTHENTICATION_SIGN_UP = "NAVIGATION_AUTHENTICATION_SIGN_UP";
export const NAVIGATION_AUTHENTICATION_FORGOT_PASSWORD = "NAVIGATION_AUTHENTICATION_FORGOT_PASSWORD";
export const NAVIGATION_AUTHENTICATION_CONFIRM_ACCOUNT = "NAVIGATION_AUTHENTICATION_CONFIRM_ACCOUNT";
/* CRUD TYPES */
export const CRUD_SWITCH_MODAL_VISIBILITY = "CRUD_SWITCH_MODAL_VISIBILITY";
export const CRUD_SET_IMAGE_RECORD = "CRUD_SET_IMAGE_RECORD";
/* GALLERY TYPES */
export const GALLERY_SET_IMAGE_RECORDS = "GALLERY_SET_IMAGE_RECORDS";

/* DATA LAYER TYPES */
export const DATA_TABLE_NAME = `${ENVIRONMENT}-pictures-table`;

/* Messages and constants */
export const AUTHENTICATION_INVALID_PWD_MSG = `
Password must follow:
8 to 16 characters long
, at least one number
, at least one special character: ! @ # $ % ^ & * .
, at least one uppercase letter
, and at least one lowercase letter.
`;

/* constant objects */
export const AUTHENTICATION_PWD_VALIDATION_REGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*\.])[a-zA-Z0-9!@#$%^&*\.]{8,16}$/;