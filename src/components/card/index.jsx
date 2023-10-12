import { ArrowRightIcon, ThickArrowRightIcon } from "@radix-ui/react-icons"
import {
  Avatar,
  Card,
  Box,
  Flex,
  Text,
  IconButton,
  Tooltip,
} from "@radix-ui/themes"
import "../card/index.css"
import { Link } from "react-router-dom"

const CardSmall = (props) => {
  const { countryName, capital, countryCode } = props
  return (
    <Card style={{ width: 240, height: 80 }}>
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
          <Box>
            <Link to="/detailsPage">
              <IconButton>
                <Tooltip content="check Details">
                  <ArrowRightIcon
                    className="card__btn"
                    width="20"
                    height="20"
                  />
                </Tooltip>
              </IconButton>
            </Link>
          </Box>
        </Box>
      </Flex>
    </Card>
  )
}

export default CardSmall
