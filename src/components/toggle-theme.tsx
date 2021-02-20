import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
export default function ThemeToggle() {
  const { toggleColorMode: toggleMode } = useColorMode()
  const ToggleIcon = useColorModeValue(MoonIcon,SunIcon)
  const iconColor = useColorModeValue('teal.500', 'teal.600')
  return (
    <IconButton
      icon={<ToggleIcon />}
      color={iconColor}
      aria-label="Toggle Theme"
      onClick={toggleMode}
    />
  )
}