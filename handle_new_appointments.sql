CREATE OR REPLACE FUNCTION handle_new_appointments()
RETURNS TRIGGER AS $$
  BEGIN
    INSERT INTO public.appointments_public (freelancer_id, slot_id, schedule_date_time, reserved_date_time, status)
    VALUES(new.freelancer_id, new.slot_id, new.schedule_date_time, new.reserved_date_time, new.status);

    RETURN NEW;
  END;
$$
LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS onCreateAppointments on public.appointments;
CREATE TRIGGER onCreateAppointments
AFTER INSERT ON public.appointments
FOR EACH ROW EXECUTE PROCEDURE handle_new_appointments();

CREATE OR REPLACE FUNCTION validate_appointment()
RETURNS TRIGGER AS $$
  BEGIN
    IF EXISTS (
      SELECT id
      FROM public.appointments a2
      WHERE
        new.schedule_date_time::date=a2.schedule_date_time::date
          AND
            new.slot_id=a2.slot_id
          -- AND
            -- a2.reserved_date_time + (20 * interval '1 minute') < now()
      ) THEN
        RAISE EXCEPTION 'Duplicate schedule detected';
    END IF;
    RETURN NEW;
  END;
$$
LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS onBeforeCreateAppointments on public.appointments;
CREATE TRIGGER onBeforeCreateAppointments
BEFORE INSERT ON public.appointments
FOR EACH ROW EXECUTE PROCEDURE validate_appointment();
