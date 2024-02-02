/**
 * v0 by Vercel.
 * @see https://v0.dev/t/DLv8zWvFnWl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="w-full px-4 md:px-6 ">
      <article className="prose prose-gray dark:prose-invert max-w-4xl">
        <h1 className="text-2xl font-semibold md:text-3xl">Help Center</h1>
        <section className="mt-4">
          <h2 className="text-xl font-semibold md:text-2xl">Getting Started</h2>
          <p className="mt-2">
            Welcome to our book publishing service dashboard. This guide will
            help you navigate through the dashboard and make the most of our
            services. To get started, sign in to your account. If you don't have
            an account, you can easily create one by clicking on the 'Sign Up'
            button.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-semibold md:text-2xl">
            Uploading a Book
          </h2>
          <p className="mt-2">
            To upload a new book for publishing, navigate to the 'Upload'
            section in the dashboard. Click on the 'Upload Book' button and
            select the file you want to upload. Please note that we only accept
            files in PDF format. Once your file is uploaded, you can add
            additional details such as the book title, author name, and
            description.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-semibold md:text-2xl">
            Managing Book Details
          </h2>
          <p className="mt-2">
            You can edit book details like title, author, and description by
            navigating to the 'My Books' section in the dashboard. Click on the
            'Edit' button next to the book you want to edit. Make sure to save
            your changes before leaving the page.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-semibold md:text-2xl">
            Sales and Royalties
          </h2>
          <p className="mt-2">
            To view sales data and royalties earned from book sales, navigate to
            the 'Sales' section in the dashboard. Here, you can view detailed
            reports on your book sales and the royalties you have earned.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-semibold md:text-2xl">Troubleshooting</h2>
          <p className="mt-2">
            If you encounter any issues such as upload errors or display issues,
            please check our 'Troubleshooting' section for common issues and
            their solutions. If you can't find a solution to your problem,
            please don't hesitate to contact our support team.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-semibold md:text-2xl">Contact Support</h2>
          <p className="mt-2">
            If you need further assistance, you can get in touch with our
            customer support team by navigating to the 'Contact Support' section
            in the dashboard. Fill out the contact form with your query, and our
            team will get back to you as soon as possible.
          </p>
        </section>
      </article>
    </div>
  );
}
