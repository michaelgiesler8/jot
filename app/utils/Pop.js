export class Pop {
  static async confirm(title = "Are you sure?", text = "You won't be able to revert this!", confirmButtonText = "Yes", icon = "warning") {
    try {
      const res = await Swal.fire({
        title,
        text,
        icon,
        confirmButtonText,
        showCancelButton: true,
        reverseButtons: true,
        confirmButtonColor: "var(--bs-primary)",
        cancelButtonColor: "var(--bs-secondary)",
      });
      return res.isConfirmed;
    } catch (error) {
      return false;
    }
  }

  static toast(title = "Warning!", icon = "warning", position = "top-end", timer = 3000, progressBar = true) {
    Swal.fire({
      title,
      icon,
      position,
      timer,
      timerProgressBar: progressBar,
      toast: true,
      showConfirmButton: false,
    });
  }

  static error(error) {
    this.toast(error.message || error, "error");
  }

  static success(message = "Success!") {
    this.toast(message, "success");
  }
}