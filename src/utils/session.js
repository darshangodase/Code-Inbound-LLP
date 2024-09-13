export const generateSessionId=()=>{
  return 'session_' + Math.random().toString(36).substring(2, 11);
};