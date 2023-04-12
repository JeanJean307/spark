import { IconProps } from '../Types'

export const Speed = ({ title, fill = 'currentColor', stroke = 'none', ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...{ ...(title && { 'data-title': title }), fill, stroke, ...props }}
    dangerouslySetInnerHTML={{
      __html:
        (title === undefined ? '' : `<title>${title}</title>`) +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.225 5.19995C15.4676 5.19995 16.475 6.20731 16.475 7.44995C16.475 8.4101 15.8736 9.22978 15.0269 9.55284L13.7375 14.2H15.875C16.8691 14.2 17.6825 14.9736 17.746 15.9517L17.75 16.075V16.45H18.0263C19.0744 16.45 19.9317 17.2261 19.9961 18.2064L20 18.325V19.825C20 20.009 19.8604 20.1622 19.6762 20.1939L19.6053 20.2H5.39474C5.20095 20.2 5.03978 20.0673 5.00636 19.8924L5 19.825V18.325C5 17.3292 5.81698 16.5148 6.84887 16.4536L6.97368 16.45H7.25V16.075C7.25 15.0808 8.02365 14.2674 9.00172 14.2039L9.125 14.2H11.084L12.5136 9.04564C12.5227 9.01296 12.5358 8.98249 12.5523 8.95464C12.1938 8.55716 11.975 8.02911 11.975 7.44995C11.975 6.20731 12.9824 5.19995 14.225 5.19995ZM18.0263 17.2H6.97368C6.356 17.2 5.84877 17.6492 5.79431 18.2226L5.78947 18.325V19.45H19.2105V18.325C19.2105 17.7746 18.7945 17.3165 18.2449 17.2191L18.1404 17.2051L18.0263 17.2ZM15.875 14.95H9.125C8.54023 14.95 8.05966 15.3961 8.00515 15.9666L8 16.075V16.45H17V16.075C17 15.5267 16.6079 15.0701 16.0888 14.9702L15.9833 14.9551L15.875 14.95ZM13.1811 9.44364L11.8625 14.2H12.959L14.207 9.6992L14.0928 9.69613C13.7652 9.67715 13.4563 9.58806 13.1811 9.44364ZM14.225 5.94995C13.3966 5.94995 12.725 6.62152 12.725 7.44995C12.725 8.27838 13.3966 8.94995 14.225 8.94995C14.3834 8.94995 14.5361 8.92539 14.6795 8.87986C14.7286 8.85542 14.7855 8.82486 14.8502 8.78443C14.8836 8.76355 14.9148 8.75874 14.9434 8.76586C15.4091 8.51248 15.725 8.0181 15.725 7.44995C15.725 6.62152 15.0534 5.94995 14.225 5.94995Z"/>',
    }}
  />
)

export const tags = ['speed', 'criteria', 'automobile']