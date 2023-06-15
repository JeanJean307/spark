import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const FlagTn = React.forwardRef(
  (
    { title, fill = 'currentColor', stroke = 'none', ...props }: IconProps,
    ref: Ref<SVGSVGElement>
  ) => (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
      dangerouslySetInnerHTML={{
        __html:
          (title === undefined ? '' : `<title>${title}</title>`) +
          '<path d="M23.586 20.213H.414A.414.414 0 0 1 0 19.8V4.903c0-.228.185-.414.414-.414h23.172c.229 0 .414.186.414.414V19.8a.414.414 0 0 1-.414.413Z"/><path d="M12.047 8.213a4.138 4.138 0 1 1-.007 8.277 4.138 4.138 0 0 1 .007-8.277Z"/><path d="M12.799 14.67a2.32 2.32 0 0 1-2.32-2.319 2.32 2.32 0 0 1 2.32-2.315c.436 0 .843.122 1.19.333.053.032.108-.037.064-.08a2.879 2.879 0 0 0-2.026-.832 2.899 2.899 0 0 0-2.902 2.895 2.9 2.9 0 0 0 2.902 2.898c.789 0 1.504-.319 2.026-.833.043-.043-.012-.111-.064-.08a2.29 2.29 0 0 1-1.19.333Z"/><path d="m12.587 10.729.64.868 1.028-.324a.145.145 0 0 1 .162.223l-.628.877.626.878a.145.145 0 0 1-.163.223l-1.027-.326-.642.866a.145.145 0 0 1-.262-.085l-.007-1.079-1.023-.342a.145.145 0 0 1 0-.276l1.024-.34.01-1.078a.145.145 0 0 1 .262-.085Z"/>',
      }}
    />
  )
)

FlagTn.displayName = 'FlagTn'

export const tags = ['FlagTN', '']