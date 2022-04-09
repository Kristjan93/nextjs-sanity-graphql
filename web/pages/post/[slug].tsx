import { PortableText } from "@portabletext/react";
import { GetStaticPaths, GetStaticProps } from "next";
import client from "../../lib/graphql/client";
import {
  GetPostBySlugDocument,
  GetPostBySlugQuery, GetPostsDocument,
  GetPostsQuery
} from '../../lib/graphql/generated/graphql';

export const getStaticPaths:GetStaticPaths = async () => {
  const { data } = await client.query<GetPostsQuery>({
    query: GetPostsDocument,
  });

  return {
    paths: data.allPost.map(({ slug }) => ({ params: { slug: slug?.current ?? '' }})),
    fallback: false
  }
}

export const getStaticProps:GetStaticProps = async (context) => {
  const slug = context.params?.slug as string

  const { data } = await client.query<GetPostBySlugQuery>({
    query: GetPostBySlugDocument,
    variables: { slug }
  });

  return {
    props: {
      data
    },
 };
}

interface IPostPageProps {
  data: GetPostBySlugQuery
}
const PostPage = ({ data }:IPostPageProps) => {
  const post = data.allPost[0]
  return (
    <div>
      <h1>{post.title}</h1>
      {post.author?.bioRaw && (
        <PortableText
          value={post.author?.bioRaw}
        />
      )}
    </div>
  )
}

export default PostPage