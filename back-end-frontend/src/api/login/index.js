
import require from "@/api/request"

export const login = data => {
  return require({
    method: "get",
    url: "/auth/login",
    data    
  })
}

export const gitee = data => {
  return require({
    method: "POST",
    url: "/auth/gitee",
    data    
  })
}