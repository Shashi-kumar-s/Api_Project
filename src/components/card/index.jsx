import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Avatar, Card, Box, Flex, Text, Tooltip } from "@radix-ui/themes"
import "../card/index.css"
import { Link } from "react-router-dom"
import propTypes from "prop-types"

const CardSmall = (props) => {
  const { countryName, iso3, iso2, img } = props
  return (
    <Card className="smallcard">
      <Box className="flag__img__container">
        {img && <img src={img} alt="flag" width={"80px"} />}
        <Box>
          <Link to={`detailspage/${countryName}/${iso2}/${iso3}`}>
            <Tooltip content="check Details">
              <ArrowRightIcon className="card__btn" width="20" height="20" />
            </Tooltip>
          </Link>
        </Box>
      </Box>
      <Flex gap="3" align="center">
        <Avatar size="3" radius="full" fallback={iso2} />
        <Box className="card__details">
          <Box>
            <Text as="div" size="2" weight="bold">
              {countryName}
            </Text>
            <Text as="div" size="2" color="gray">
              {iso3}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Card>
  )
}
CardSmall.propTypes = {
  countryName: propTypes.string,
  iso2: propTypes.string,
  iso3: propTypes.string,
  img: propTypes.string,
}

export default CardSmall
