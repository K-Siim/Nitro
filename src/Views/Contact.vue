<template>
    <div class="bg-[#000300] px-4 py-12 mt-12">
      <div class="mx-auto max-w-xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Contact sales</h2>
        <p class="mt-2 text-sm text-gray-400">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
      </div>

      <form action="#" method="POST" class="mx-auto mt-10 max-w-lg">
        <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
          <div>
            <label for="first-name" class="block text-sm font-medium text-white">First name</label>
            <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                   class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600" />
          </div>
          <div>
            <label for="last-name" class="block text-sm font-medium text-white">Last name</label>
            <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                   class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600" />
          </div>
          <div class="sm:col-span-2">
            <label for="company" class="block text-sm font-medium text-white">Company</label>
            <input type="text" name="company" id="company" autocomplete="organization"
                   class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600" />
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-medium text-white">Email</label>
            <input type="email" name="email" id="email" autocomplete="email"
                   class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600" />
          </div>
          <div class="sm:col-span-2">
            <label for="phone-number" class="block text-sm font-medium text-white">Phone number</label>
            <div class="mt-1 flex rounded-md bg-white outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-indigo-600">
              <select id="country" name="country" autocomplete="country"
                      class="rounded-l-md py-1.5 px-3 text-sm text-gray-500 focus:outline-none">
                <option>US</option>
                <option>CA</option>
                <option>EU</option>
              </select>
              <input type="text" name="phone-number" id="phone-number"
                     class="flex-grow rounded-r-md py-1.5 px-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
                     placeholder="123-456-7890" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-medium text-white">Message</label>
            <textarea name="message" id="message" rows="3"
                      class="mt-1 block w-full rounded-md bg-white px-3 py-1.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-indigo-600"></textarea>
          </div>
          <div class="flex items-center gap-x-3 sm:col-span-2 mt-2">
            <button type="button"
                    class="w-6 h-3 rounded-full bg-gray-200 ring-1 ring-inset ring-gray-300 flex items-center p-0.5 transition-colors focus:outline-none"
                    role="switch" aria-checked="false" aria-labelledby="switch-1-label">
              <span class="sr-only">Agree to policies</span>
              <span aria-hidden="true" class="h-2 w-2 rounded-full bg-white shadow"></span>
            </button>
            <label class="text-sm text-gray-500" id="switch-1-label">
              By selecting this, you agree to our
              <a href="#" class="font-semibold text-indigo-500">privacy&nbsp;policy</a>.
            </label>
          </div>
        </div>

        <div class="mt-8">
          <button type="submit"
                  class="w-full rounded-md bg-[#00df9a] px-3 py-2 text-sm font-semibold text-black hover:bg-[#00bf82] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#00df9a]">
            Let's talk
          </button>
        </div>
      </form>
    </div>
  
</template>