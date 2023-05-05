export default function SignupForm() {
  return (
    <>
      <form
        method="POST"
        action="https://1ebb0834.sibforms.com/serve/MUIEABg79115rPtMI1fZhLoYmKiTdVgnX9y2kqJ2yyzRMcv_w3UsqZZV0CfFLdQsyyVVof0kHf012lqXLGL3aNloY3_yzN7OQyUxiMMWiTHJziOPYJXjbjX2CSNSHXrKU7brIv_gnrtlDXL03YzznNOPlPyXzUGktiyU0WUdfyR9dmsxq5Zal1JWKa8J_SykSjOF6aM8NOn5nIFU"
        data-type="subscription"
        className={"flex flex-col items-center gap-y-4 max-w-sm mx-auto"}
      >
        <label htmlFor="EMAIL" className="sr-only">
          Email address
        </label>
        <input
          id="EMAIL"
          name="EMAIL"
          type="email"
          autoComplete="email"
          required
          className="w-full min-w-0 flex-auto rounded-md border bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-primary focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="mt-3 w-full max-w-xs rounded-md border border-transparent bg-primary px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
        >
          Sign me up to the masterclass and send me lesson 1
        </button>
      </form>
    </>
  )
}
