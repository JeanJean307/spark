import { IconProps } from '../Types'

export const Loggia = ({ title, fill = 'currentColor', stroke = 'none', ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M18.6111 5.19995C18.8259 5.19995 19 5.37406 19 5.58884V16.4777C19 16.6925 18.8259 16.8666 18.6111 16.8666H11.2214L11.2222 18.8111C11.2222 19.002 11.0847 19.1608 10.9032 19.1937L10.8333 19.2H6.94444C6.75353 19.2 6.59475 19.0624 6.56182 18.881L6.55556 18.8111L6.55478 16.8666H5.38889C5.19798 16.8666 5.03919 16.729 5.00627 16.5476L5 16.4777V5.58884C5 5.37406 5.17411 5.19995 5.38889 5.19995H18.6111ZM10.4444 16.0888H7.33333V18.4222H10.4444V16.0888ZM11.6111 5.97773H5.77778V16.0888H6.55478L6.55556 15.7C6.55556 15.509 6.69313 15.3503 6.87454 15.3173L6.94444 15.3111H8.49954L8.50037 14.3197C8.19671 14.5735 7.77409 14.6632 7.38153 14.5316L7.27671 14.4907C6.62349 14.1999 5.94263 13.344 6.21174 12.7395C6.38093 12.3595 6.87522 12.192 7.38128 12.1923C7.34971 12.0708 7.33333 11.9428 7.33333 11.8111C7.33333 10.8318 8.03821 9.47773 8.88889 9.47773C9.73956 9.47773 10.4444 10.8318 10.4444 11.8111C10.4444 12.5359 9.94871 13.1449 9.27779 13.3176L9.27732 14.3723L9.78057 13.8694C9.93244 13.7175 10.1787 13.7175 10.3305 13.8694C10.4655 14.0044 10.4805 14.214 10.3755 14.3655L10.3305 14.4194L9.55276 15.1972C9.49581 15.2541 9.42559 15.2897 9.35205 15.3039L9.27732 15.3111H10.8333C11.0242 15.3111 11.183 15.4486 11.216 15.63L11.2222 15.7L11.2214 16.0888H11.6111V5.97773ZM18.2222 5.97773H12.3889V10.6444H13.1667C13.3814 10.6444 13.5556 10.8185 13.5556 11.0333C13.5556 11.2242 13.418 11.383 13.2366 11.4159L13.1667 11.4222H12.3889V16.0888H18.2222V5.97773ZM6.92228 13.0559C6.88384 13.1422 7.28073 13.6412 7.59306 13.7802C7.78927 13.8676 8.01915 13.7793 8.1065 13.5831C8.19386 13.3869 8.10562 13.157 7.90941 13.0697C7.59708 12.9306 6.96071 12.9695 6.92228 13.0559ZM8.88889 10.2555C8.60536 10.2555 8.11111 11.2049 8.11111 11.8111C8.11111 12.2406 8.45933 12.5888 8.88889 12.5888C9.31844 12.5888 9.66667 12.2406 9.66667 11.8111C9.66667 11.2049 9.17242 10.2555 8.88889 10.2555Z"/>',
    }}
  />
)

export const tags = ['loggia', 'criteria', 'immobilierneuf']