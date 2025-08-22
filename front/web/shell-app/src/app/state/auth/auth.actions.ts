import { createActionGroup, props } from '@ngrx/store';


export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Login': props<{ username: string; password: string }>(),
    'Login Success': props<{ token: string; user: { id: string; name: string; roles: string[] } }>(),
    'Login Failure': props<{ error: any }>(),
    //'Logout': () => ({}), TODO
  },
});
