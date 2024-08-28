/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line no-unused-vars
import React, { FC, useState, useEffect } from "react";
import classNames from "classnames";
import style from "./TeamMembers.module.scss";
import { Preloader } from "../Form/components";
import { Button } from "../Controls/Button";

interface TeamMember { 
  photo: string;
  name: string;
  position: string;
  email: string;
  phone: number;
  message: string;
}

export const TeamMembers: FC = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchMembers(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMembers = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
      );
      const data = await response.json();
      if (data.users.length > 0) {
        setMembers((prevMembers) => [...prevMembers, ...data.users]);
      } else {
        setHasMore(false);
      }
      setLoading(false);
    } catch (error) {
      setError(error as Error);
      setLoading(false);
    }
  };

  const handleShowMore = () => {
    setPage((prevPage) => prevPage + 1);
    fetchMembers(page + 1);
  };

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = "https://via.placeholder.com/80";
    event.currentTarget.className = style.member_photo;
  };

  return (
    <div id="teamMembers" className={style.team_members}>
      <h2 className={style.members_title}>Working with GET request</h2>
      <div className={style.members_grid}>
        <ul className={style.members_list}>
          {members.map((member, index) => (
            <li key={index} className={style.member_card}>
              <div className={style.member_text_wrapper}>
                <img
                  src={member.photo}
                  alt={member.name}
                  className={classNames(style.member_photo, {
                    [style.error_photo]: !member.photo,
                  })}
                  onError={handleImageError}
                />
                <p className={style.member_title}>{member.name}</p>
                <p className={style.member_text}>{member.position}</p>
                <p className={style.member_text}>{member.email}</p>
                <p className={style.member_text}>{member.phone}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {loading && <Preloader />}
      {error && <div>Error: {error.message}</div>}
      <div className={style.btn_wrapper}>
        {hasMore && !loading && (
          <Button onClick={handleShowMore}>Show more</Button>
        )}
      </div>
    </div>
  );
};

