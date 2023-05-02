import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const CvFill = React.forwardRef(
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
          '<path d="M20.3301 9.33333L13.0243 2.16667C12.8544 2.08333 12.6845 2 12.5146 2H5.20874C4.61408 2 4.10437 2.16667 3.67961 2.58333C3.25485 3 3 3.58333 3 4.16667V19.9167C3 20.5 3.25485 21.0833 3.67961 21.4167C4.10437 21.8333 4.61408 22 5.20874 22H18.2913C18.8859 22 19.4806 21.75 19.8204 21.3333C20.2451 20.9167 20.5 20.3333 20.5 19.8333V9.83333C20.5 9.66667 20.5 9.5 20.3301 9.33333ZM8.09709 7.66667H10.9854C11.4102 7.66667 11.75 8 11.75 8.41667C11.75 8.83333 11.4951 9.16667 11.0704 9.16667H8.09709C7.67233 9.16667 7.33252 8.83333 7.33252 8.41667C7.33252 8 7.67233 7.66667 8.09709 7.66667ZM15.4029 17.75H8.09709C7.67233 17.75 7.33252 17.4167 7.33252 17C7.33252 16.5833 7.67233 16.25 8.09709 16.25H15.4029C15.8277 16.25 16.1675 16.5833 16.1675 17C16.1675 17.4167 15.8277 17.75 15.4029 17.75ZM15.4029 13.5H8.09709C7.67233 13.5 7.33252 13.1667 7.33252 12.75C7.33252 12.3333 7.67233 12 8.09709 12H15.4029C15.8277 12 16.1675 12.3333 16.1675 12.75C16.1675 13.1667 15.8277 13.5 15.4029 13.5Z"/>',
      }}
    />
  )
)

CvFill.displayName = 'CvFill'

export const tags = ['cv-fill', 'account']
