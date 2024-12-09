import * as contentful from "contentful"

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
export default async function Home() {
  const result = await client.getEntry(process.env.ENTRY_ID);
  const { title = "", description = "", url = "" } = result.fields;
  return(
    <div className="w-full h-screen gap-5 flex flex-col justify-center items-center">
      <h2 className="leading-[0.8] ">{title}</h2>
      <p className="leading-[0.8] ">{description}</p>
      <a href={url}>link</a>
    </div>
  )
}

/* export async function getStaticProps() {
  const result = await client.getEntry(process.env.ENTRY_ID);
  
  return {
    props: {
      title:result.fields.title || "", 
      description:result.fields.description || "", 
      url:result.fields.url || ""
    }
  }
} */