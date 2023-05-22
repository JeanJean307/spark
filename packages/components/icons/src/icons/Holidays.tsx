import React, { type Ref } from 'react'

import { IconProps } from '../Types'

export const Holidays = React.forwardRef(
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
          '<path d="M13.4124 2.29625C13.4124 2.95855 12.8715 3.50043 12.2104 3.50043 11.5492 3.50043 11.0083 2.95855 11.0083 2.29625V1.70419C11.0083 1.04188 11.5392.5 12.2104.5 12.8815.5 13.4124 1.04188 13.4124 1.70419V2.29625ZM1.70209 12.9232H2.29312C2.95427 12.9232 3.49521 12.3813 3.49521 11.719 3.49521 11.0567 2.95427 10.5148 2.29312 10.5148H1.70209C1.04094 10.5148.5 11.0567.5 11.719.5 12.3813 1.04094 12.9232 1.70209 12.9232ZM21.6167 12.9232H22.2078C22.8689 12.9232 23.4099 12.3813 23.4099 11.719 23.4099 11.0567 22.8689 10.5148 22.2078 10.5148H21.6167C20.9556 10.5148 20.4146 11.0567 20.4146 11.719 20.4146 12.3813 20.9556 12.9232 21.6167 12.9232ZM4.45688 5.79831C4.68728 6.02911 4.99782 6.14953 5.30836 6.14953 5.6189 6.14953 5.91943 6.02911 6.15984 5.79831 6.63066 5.32667 6.63066 4.56402 6.15984 4.09238L5.74913 3.68094C5.27831 3.2093 4.51699 3.2093 4.04617 3.68094 3.57535 4.15258 3.57535 4.91524 4.04617 5.38688L4.45688 5.79831ZM19.8237 6.15967C19.5832 6.39047 19.2827 6.51089 18.9722 6.51089 18.6616 6.51089 18.3511 6.39047 18.1207 6.15967 17.6499 5.68803 17.6499 4.92538 18.1207 4.45374L18.5314 4.04231C19.0022 3.57067 19.7636 3.57067 20.2344 4.04231 20.7052 4.51395 20.7052 5.2766 20.2344 5.74824L19.8237 6.15967Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M22.2979 16.4654H18.6616C19.5431 15.1609 20.034 13.6055 20.034 11.9798C20.034 7.54442 16.4277 3.93186 11.99 3.93186C7.55227 3.93186 3.96603 7.53438 3.96603 11.9698C3.96603 13.5955 4.45688 15.1509 5.33841 16.4554H1.70209C1.04094 16.4554 0.5 16.9973 0.5 17.6596C0.5 18.3219 1.04094 18.8638 1.70209 18.8638H22.2979C22.9591 18.8638 23.5 18.3219 23.5 17.6596C23.5 16.9973 22.9591 16.4554 22.2979 16.4554V16.4654ZM6.37021 11.9698C6.37021 8.85899 8.8946 6.3302 12 6.3302C15.1054 6.3302 17.6298 8.85899 17.6298 11.9698C17.6298 13.746 16.7983 15.3917 15.3959 16.4554H8.59408C7.19164 15.3917 6.36019 13.736 6.36019 11.9698H6.37021Z"/><path d="M5.16808 21.0916H18.8419C19.503 21.0916 20.044 21.6335 20.044 22.2958C20.044 22.9581 19.503 23.5 18.8419 23.5H5.16808C4.50693 23.5 3.96599 22.9581 3.96599 22.2958C3.96599 21.6335 4.50693 21.0916 5.16808 21.0916Z"/>',
      }}
    />
  )
)

Holidays.displayName = 'Holidays'

export const tags = ['Holidays', '']
