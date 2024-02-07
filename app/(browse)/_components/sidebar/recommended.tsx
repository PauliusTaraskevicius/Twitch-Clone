"use client";

import { User } from "@prisma/client";

import { useSidebar } from "@/store/use-sidebar";

import { UserItem, UserItemSkeleton } from "./user-item";

interface RecommendedProps {
  //   data: (User & {
  //     stream: { isLive: boolean } | null;
  //   })[];
  data: User[];
}

export const Recommended = ({ data }: RecommendedProps) => {
  const { collapsed } = useSidebar((state) => state);

  const showLabel = !collapsed && data.length > 0;

  return (
    <ul className="space-y-2 px-2">
      {data.map((user) => (
        <UserItem
          key={user.id}
          username={user.username}
          imageUrl={user.imageUrl}
          //   isLive={user.stream?.isLive}
        />
      ))}
    </ul>
  );
};


export const RecommendedSkeleton = () => {
    return (
      <ul className="px-2">
        {[...Array(3)].map((_, i) => (
          <UserItemSkeleton key={i} />
        ))}
      </ul>
    );
  };
