import { api } from "@/lib/axiosInstance";
import { toast } from "react-toastify";
import { create } from "zustand";

const useAuthStore = create((set) => ({
  user_name: "",
  user_profile_link: "",
  loading: false,

  editProfile: async (id, data) => {
    set({ loading: true });
    try {
      const res = await api.put(`/api/user/${id}`, data);
      set({
        loading: false, 
      });

      if(res){
        toast.success("Profile updated successfully!");
        return true;
      }
    } catch (error) {
      set({ loading: false });
      toast.error("Profile update failed!");
      console.log(error);
    }
  },
}));

export default useAuthStore;
