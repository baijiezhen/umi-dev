import request from '@/utils/request';
export async function queryPros() {
  return request('/personal_category');
}
