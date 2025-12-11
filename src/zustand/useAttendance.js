import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAttendance = create(persist(
    (set)=>({
      attendances:[],
      checkIn :(payload)=>set((state)=>({
         attendances:[
            ...state.attendances,payload
         ]
      })),
      checkOut: (id,payload)=>set((state)=>({
       attendances:state.attendances.map((item)=>{
       if(item.id === id)
       {
        return {
            ...item,
            ...payload
        }
       }else{
        return item
       }
       })
      }))
    }),
    {name:"attendance"}
))