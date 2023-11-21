<template>
  <AppTitle label="Contact" />
  <form
    method="post"
    action="https://test-648429.form.newt.so/v1/ZG_Um6sRP"
    class="flex flex-col gap-y-4"
  >
    <div class="form-control">
      <label for="name" class="label font-bold">お名前</label>
      <input id="name" name="name" type="text" class="input input-bordered" />
    </div>
    <div class="form-control">
      <label for="email" class="label font-bold">メールアドレス</label>
      <input
        id="email"
        name="email"
        type="email"
        class="input input-bordered"
      />
    </div>
    <div class="form-control">
      <label for="message" class="label font-bold">メッセージ</label>
      <textarea
        id="message"
        name="message"
        class="py-2 input input-bordered resize-none h-32"
      ></textarea>
    </div>

    <button type="submit" class="btn">送信</button>
  </form>
</template>