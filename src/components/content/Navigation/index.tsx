/********************************************************************************
 * Copyright (c) 2023 BMW Group AG
 * Copyright (c) 2023 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

import { Box } from '@mui/material'
import { type MenuProps } from '../../basic/Menu'
import { NavItem } from './NavItem'

export interface NavigationProps extends MenuProps {
  active?: string
  unstyled?: boolean
  selectedItem?: (item: string) => void
}

export const Navigation = ({
  items,
  component,
  activePathname = '',
  unstyled = false,
  selectedItem,
}: NavigationProps): JSX.Element => {
  return (
    <Box
      className="cx-navigation"
      component="nav"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        height: '100%',
      }}
    >
      {items.map((link) => {
        if (!link.children?.length) return null
        const isActive =
          activePathname === link.name ||
          link.href === activePathname ||
          link.to === activePathname

        return (
          <NavItem
            {...link}
            isActive={isActive}
            component={component}
            unstyled={unstyled}
            key={link.title}
            onClick={(e) => {
              e.preventDefault()
              e.preventDefault()
              if (selectedItem != null) selectedItem(link.href ?? '')
            }}
          />
        )
      })}
    </Box>
  )
}
