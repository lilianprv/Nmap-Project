import { Field, Form, Formik } from "formik"
import axios from "axios"
import Link from "next/link"
import React from "react"
import { useState } from "react"

const initialValues = {
  fieldIp: "",
  fieldOptionScan: "",
  fieldList: "",
}

const App = () => {
  const [darkToggle, setDarkToggle] = useState(false)
  const handleSubmit = async (values) => {
    await axios.post("http://localhost:5000/add", values)
  }

  return (
    <div
      class={`h-screen static w-full flex items-center  justify-center bg-gray-200 flex-col ${
        darkToggle && "dark"
      }`}
    >
      <div class="max-w-full  overflow-hidde bg-gray-300 p-8 rounded-lg mt-4 dark:bg-gray-600">
        <header className="container mx-auto bg-gray-400 rounded-xl shadow  p-8 m-10 dark:bg-gray-500">
          <h1 className="text-center text-xl my-6"> Nmap </h1>
          <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form>
              <Field
                name="fieldIp"
                placeholder="  Adresse IP"
                className="border rounded-md"
              ></Field>
              <Field
                as="select"
                name="fieldOptionScan"
                className="border rounded-md mx-4"
              >
                <option value="">Choisir une option de scan</option>
                <option value="-sO">-sO</option>
                <option value="-O">-O</option>
              </Field>
              <Field
                as="select"
                name="fieldOption"
                className="border rounded-md"
              >
                <option value="">Choisir une option</option>
                <option value="--max-retries"> Max retries </option>
                <option value="--host-timeout">Host Timeout</option>
                <option value="--min-rate">Min rate</option>
                <option value="--max-scan-delay">Max scan delay</option>
              </Field>
              <Field
                as="select"
                name="fieldOptionNumber"
                className="border rounded-md mx-4"
              >
                <option value="">Choisir une valeur </option>

                {[...Array(300)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </Field>
              <button
                name="sendButton"
                type="submit"
                className=" hover:underline ml-2 rounded-xl px-4 bg-gray-500 dark:bg-gray-300"
              >
                Envoyer
              </button>
            </Form>
          </Formik>
        </header>
        <main>
          <ul className="text-center">
            <li className="hover:underline  my-4">
              <Link href="/components/History">Historique des requêtes</Link>
            </li>
          </ul>
        </main>

        <div class="flex items-center">
          <svg
            class="h-6 w-10 mr-3 text-gray-900 dark:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <div class="relative inline-block w-10 select-none">
            <input
              type="checkbox"
              onClick={() => setDarkToggle(!darkToggle)}
              for="toggleTheme"
              class=" transition transform translate-x-0 duration-500 theme-switch absolute block w-5 h-5 rounded-full bg-white appearance-none cursor-pointer mx-1 my-1 "
            ></input>
            <label
              for="toggleTheme"
              class="theme-switch-label block overflow-hidden w-14 h-7 rounded-full bg-blue-300 cursor-pointer "
            ></label>
          </div>
          <svg
            class="h-6 w-6 ml-10 text-gray-900 dark:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default App
