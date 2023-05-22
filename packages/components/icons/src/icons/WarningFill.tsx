import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const WarningFill = React.forwardRef(
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
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9999 3.7998C11.5609 3.7998 11.1305 3.92096 10.7559 4.14992C10.3813 4.37888 10.0772 4.70675 9.87702 5.09745L2.25516 20.3412L2.25437 20.3428C2.07194 20.7055 1.9851 21.1087 2.00209 21.5144C2.01911 21.9206 2.13969 22.3158 2.35239 22.6623C2.56509 23.0088 2.86284 23.2953 3.21737 23.4943C3.5719 23.6934 3.97143 23.7986 4.37803 23.7998L4.38106 23.7998H19.6188L19.6218 23.7998C20.0284 23.7986 20.428 23.6934 20.7825 23.4943C21.137 23.2953 21.4348 23.0088 21.6475 22.6623C21.8602 22.3158 21.9808 21.9206 21.9978 21.5144C22.0148 21.1089 21.928 20.7057 21.7457 20.3431L21.7447 20.3412L14.1273 5.1062L14.1228 5.09748C13.9226 4.70677 13.6185 4.37888 13.244 4.14992C12.8694 3.92096 12.4389 3.7998 11.9999 3.7998ZM12 10.0252C12.5523 10.0252 13 10.4729 13 11.0252V15.6085C13 16.1608 12.5523 16.6085 12 16.6085C11.4477 16.6085 11 16.1608 11 15.6085V11.0252C11 10.4729 11.4477 10.0252 12 10.0252ZM13.25 18.6071C13.25 19.2974 12.6904 19.8571 12 19.8571C11.3096 19.8571 10.75 19.2974 10.75 18.6071C10.75 17.9167 11.3096 17.3571 12 17.3571C12.6904 17.3571 13.25 17.9167 13.25 18.6071Z"/>',
      }}
    />
  )
)

WarningFill.displayName = 'WarningFill'

export const tags = ['WarningFill', '']
