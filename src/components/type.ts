export interface formLoginProps {
  email: string;
  password: string;
}

export interface formProps {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface formCreatePartyProps {
  ownerId: string;
  partyName: string;
  memberLimit: number;
}
