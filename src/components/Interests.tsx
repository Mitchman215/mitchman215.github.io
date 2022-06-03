export default function Interests() {
  return (
    <section class="my-interests" id="interests">
      <h2 class="section__title section__title--interests">What I do</h2>
      <div class="interests">
        <Interest interest="Web Development" description="placeholder description" />
        <Interest interest="AI" description="placeholder description" />
        <Interest
          interest="Mobile Development"
          description="placeholder description"
        />
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
