import RoadmapTracker from './basic/RoadmapTracker'
import Title from './basic/Title'
import roadmapData from './data/roadmapData.jsx'

export default function RoadMap() {
  return (
    <section className='roadmap' id='roadmap'>
      <div className='container'>
        <Title title={'Roadmap'} />
        <RoadmapTracker data={roadmapData.first} />
        <RoadmapTracker data={roadmapData.sec} />

        <div className='roadmap-bottom'>
          <p>
            The combination of the repurchase and burn method with the actual
            value being generated will result in significant price increases for
            the holders, even if they don’t have the patience to wait for step 8
            to come.
          </p>
          <p>
            At any point after Step 6, the Managing partners may choose to
            launch another coin and do it all over again.
          </p>
        </div>
      </div>
    </section>
  )
}
