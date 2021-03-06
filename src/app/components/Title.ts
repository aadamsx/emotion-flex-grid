import styled from '@emotion/styled'
import mq from '../mq'

const Title = styled.h1(
  mq()({
    fontSize: [24, 36, 64],
    fontWeight: 900
  })
)

export default Title
