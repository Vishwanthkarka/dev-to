import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
export default function Articlecomponent(props) {
  const {
    title,
    cover_image,
    tag_list,
    url,
    comments_count,
    positive_reactions_count,
    public_reactions_count,
    user,
    published_at,
    reading_time_minutes,
    published_timestamp,
  } = props.data;
  return (
    <article className="post-card">
      {cover_image && (
        <a href={url} className="post-img">
          <img src={cover_image} className="" alt="" />
        </a>
      )}
      {
        <>
          <a href="" className="u-info-card">
            <img src={user.profile_image_90} alt="" className="u-img" />
            <div className="u-info">
              <p className="u-name">{user.username} </p>
              <p className="u-pub">
                {new Date(published_at).toLocaleDateString(undefined, {
                  day: "numeric",
                  month: "long",
                })}
                &nbsp; ({dayjs(published_at).fromNow()}){" "}
              </p>
            </div>
          </a>
          <div className="p-info">
            <a href={url}>
              <h1 className="p-title">{title}</h1>
            </a>
            <div className="p-tags">
              {tag_list.map((tag) => {
                return (
                  <a href={`https://dev.to/t/${tag}`} className="p-tag">
                    #{tag}
                  </a>
                );
              })}
            </div>
            <div className="list-reaction">
              <div className="article-bar">
                <div className="reactions">
                  <svg
                    class="crayons-icon"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path>
                  </svg>
                  <div>
                    {public_reactions_count + positive_reactions_count}{" "}
                    Reactions &nbsp;
                  </div>
                </div>

                <div className="reactions">
                  <svg
                    class="crayons-icon"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                  </svg>
                  <div>{comments_count} Comments</div>
                </div>
              </div>
              
                <div className="article-bar article-right">
                  <div className=" article-read ">
                    {reading_time_minutes} min read
                  </div>
                  <div className="article-mark">
                    <svg
                      class="crayons-icon c-btn__icon"
                      aria-hidden="true"
                      focusable="false"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6.75 4.5h10.5a.75.75 0 0 1 .75.75v14.357a.375.375 0 0 1-.575.318L12 16.523l-5.426 3.401A.375.375 0 0 1 6 19.607V5.25a.75.75 0 0 1 .75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path>
                    </svg>
                  </div>
               
              </div>
              <div></div>
            </div>
          </div>
        </>
      }
    </article>
  );
}
