import { ArrowRightIcon } from "@radix-ui/react-icons"
import {
  Avatar,
  Card,
  Box,
  Flex,
  Text,
  Tooltip,
} from "@radix-ui/themes"
import "../card/index.css"
import { Link } from "react-router-dom"

const CardSmall = (props) => {
  const { countryName, capital, countryCode, id, img } = props
  return (
    <Card style={{ width: 200, height: 130 }}>
        <Box className="flag__img__container">
        <img src={img} alt="flag" width={"80px"}/>
        <Box>
            <Link to={`/detailspage/${id}`}>
                <Tooltip content="check Details">
                  <ArrowRightIcon
                    className="card__btn"
                    width="20"
                    height="20"
                  />
                </Tooltip>
            </Link>
          </Box>
        </Box>
      <Flex gap="3" align="center">
        <Avatar size="3" radius="full" fallback={countryCode} />
        <Box className="card__details">
          <Box>
            <Text as="div" size="2" weight="bold">
              {countryName}
            </Text>
            <Text as="div" size="2" color="gray">
              {capital}
            </Text>
          </Box>
          
        </Box>
      </Flex>
    </Card>
  )
}

export default CardSmall
