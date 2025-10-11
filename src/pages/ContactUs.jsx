import { constants } from "../utils/constants";

export function ContactUs() {
return (
<main className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md">
<header className="mb-6">
<h1 className="text-2xl font-semibold">Contact Us</h1>
<p className="text-sm text-gray-500 mt-1">We’re here to help — reach out and we’ll respond within 24–48 hours.</p>
</header>


<section className="space-y-6 text-gray-800">
<div>
<h2 className="text-lg font-medium">Company</h2>
<p className="mt-2">{constants.COMPANY_NAME}</p>
</div>


<div>
<h2 className="text-lg font-medium">Email</h2>
<p className="mt-2">
<a href={`mailto:${constants.SUPPORT_EMAIL}`} className="text-indigo-600 hover:underline">{constants.SUPPORT_EMAIL}</a>
</p>
</div>


<div>
<h2 className="text-lg font-medium">Phone</h2>
<p className="mt-2">{constants.PHONE}</p>
</div>


<div>
<h2 className="text-lg font-medium">Address</h2>
<p className="mt-2">{constants.ADDRESS}</p>
</div>


<form className="mt-4 grid grid-cols-1 gap-4">
<label className="block">
<span className="text-sm font-medium text-gray-700">Your name</span>
<input type="text" placeholder="John Doe" className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-200 p-2" />
</label>


<label className="block">
<span className="text-sm font-medium text-gray-700">Email</span>
<input type="email" placeholder="you@example.com" className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-200 p-2" />
</label>


<label className="block">
<span className="text-sm font-medium text-gray-700">Message</span>
<textarea rows={4} placeholder="How can we help?" className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-200 p-2" />
</label>


<button type="submit" className="w-full inline-flex justify-center items-center rounded-lg bg-indigo-600 text-white px-4 py-2 font-medium hover:bg-indigo-700">Send Message</button>
</form>
</section>
</main>
);
}