import { axiosInstance } from './axios.config'
export const organizationApiFactory = {
  fetchOrganization() {
    return axiosInstance.get('/organizations');
  },
  deleteOrganization(id: string) {
    return axiosInstance.delete(`/organizations/${id}`);
  },
  createOrganizationMember(payload: any) {
    return axiosInstance.post(`organizations/${organizationId}/members`, payload);
  },
  getEngagementSummary() {
    return axiosInstance.get('/story/engagement-summary');
  },
  deleteOrganizationMember(organizationId: string, userId: string) {
    return axiosInstance.post(`organizations/${organizationId}/members/${userId}`);
  }
};