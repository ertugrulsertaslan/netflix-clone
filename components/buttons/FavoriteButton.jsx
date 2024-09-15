"use client";
import axios from "axios";
import React, { useMemo, useCallback } from "react";
import { IoIosCheckmark } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";

const FavoriteButton = React.memo(({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorites();
  const { data: currentUser, mutate } = useCurrentUser();
  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(movieId);
  }, [currentUser, movieId]);

  const toogleFavorites = useCallback(
    async (e) => {
      e.stopPropagation();
      const requestData = { movieId };
      let response;
      if (isFavorite) {
        response = await axios.delete("/api/favorite", { data: requestData });
      } else {
        response = await axios.post("/api/favorite", requestData, {
          headers: { "Content-Type": "application/json" },
        });
      }

      const updatedFavoriteIds = response?.data?.favoriteIds;
      mutate({
        ...currentUser,
        favoriteIds: updatedFavoriteIds,
      });
      mutateFavorites();
    },
    [movieId, isFavorite, currentUser, mutate, mutateFavorites]
  );

  const Icon = isFavorite ? IoIosCheckmark : FiPlus;
  return (
    <div
      onClick={(e) => toogleFavorites(e)}
      className="cursor-pointer w-6 h-6 md:w-8 md:h-8 lg:w-11 lg:h-11 border-2 text-white border-gray-500 rounded-full flex justify-center items-center transition hover:bg-neutral-700"
    >
      <Icon size={isFavorite ? 35 : 25} />
    </div>
  );
});
export default FavoriteButton;
