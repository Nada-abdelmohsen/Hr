export enum LocalStorageKeys {
  ApprovalSidebarForms = 'approval-sidebar-forms',
  UserLang = 'user-lang',
  UserOrg = 'user-org',
  RedirectUrl = 'redirect-url',
  FirstTimeLoaded = 'first-time-loaded',
  UserEntity = 'user-entity'
}

export interface LocalStorageKeysTypes{
  // [LocalStorageKeys.ApprovalSidebarForms]: ApprovalLocalStorageFormValues;
  [LocalStorageKeys.UserLang]: string;
  // [LocalStorageKeys.UserOrg]: Organization;
  [LocalStorageKeys.RedirectUrl]: string;
  [LocalStorageKeys.FirstTimeLoaded]: boolean;
  // [LocalStorageKeys.UserEntity]: OrganizationEntity;
}
