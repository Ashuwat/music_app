import React from "react";
import PostRoom from "../../components/landing/postRoom/postRoom";

const Notfound = () => {
  return (
    <>
      <div>sorry this group has ended, or you don't have any internet</div>
      <div>if you would like to go make a group, or join one, do it here: </div>
      <PostRoom />
    </>
  );
};

export default Notfound;
