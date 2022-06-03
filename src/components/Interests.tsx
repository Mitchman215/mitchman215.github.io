export default function Interests() {
  const placeholder = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Repellendus laudantium odit dolorem quas eius corporis, ex maiores iure pariatur
  vero nostrum dignissimos velit sit quidem consequatur commodi animi quasi voluptates!`
  return (
    <section class="my-interests" id="interests">
      <h2 class="section__title section__title--interests">What I do</h2>
      <div class="interests">
        <Interest interest="Web Development" description={placeholder} />
        <Interest interest="AI" description={placeholder} />
        <Interest interest="Mobile Development" description={placeholder} />
      </div>
    </section>
  )
}

interface InterestProps {
  interest: string
  description: string
}

function Interest(props: InterestProps) {
  return (
    <div class="interest">
      <h3>{props.interest}</h3>
      <p>{props.description}</p>
    </div>
  )
}
