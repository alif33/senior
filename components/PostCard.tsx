import { NextPage } from "next";

interface cardPost {
  data: {
    id: number;
    img: string;
    title: string;
    description: string;
  }
}

const PostCard: NextPage<cardPost> = ({data}) => {
    const {img, title, description} = data;
  return (
    <div className="post-card">
      <div className="post-img">
        <img src={img} alt="" />
        <button>청산도</button>
      </div>
      <div className="container">
        <h1>{title} </h1>
        <p>{description}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
