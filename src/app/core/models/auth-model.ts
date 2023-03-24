export type Permission = {
  id: number;
  name: string;
  guard_name: string;
  description: string;
  created_at: string;
  updated_at: string;
  pivot: {
    role_id: number;
    permission_id: number;
  };
};

type UserResponse = {
  id: number;
  username: string;
  email: string;
  cellphone: string;
  super_user: true;
  created_at: string;
  updated_at: string;
  deleted_at: null;
  locals: [];
  avatar_url: string;
};

export type LoginResponse = {
  data: {
    permisions: Permission[];
    token: string;
    user: UserResponse;
    message: string;
    success: boolean;
  };
};
