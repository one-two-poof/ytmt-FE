import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";

export interface Me {
  id: number;
  name: string;
  nickname: string | null;
  profile_image: string | null;
  email: string | null;
  provider: string;
  created_at: string;
}

async function fetchMe(): Promise<Me> {
  const res = await api.get("/auth/me");
  return res.data.user;
}

export function useMe() {
  return useQuery({
    queryKey: ["me"],
    queryFn: fetchMe,
  });
}
